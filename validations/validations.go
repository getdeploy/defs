package validations

import (
	"context"

	"log"

	validations "github.com/go-ozzo/ozzo-validation/v4"
	"google.golang.org/genproto/googleapis/rpc/errdetails"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// NewError may be used to create a GRPC error with validation errors attached to it
func NewError(ctx context.Context, err error) error {
	st := status.New(codes.InvalidArgument, "Some of the fields you provided in your request are not valid")
	errors := validationErrToPBErrors(err)
	st, _ = st.WithDetails(&errdetails.BadRequest{FieldViolations: errors})
	return st.Err()
}

// ExtractErrors may be used to extract the validation errors from a GRPC error
func ExtractErrors(e error) *errdetails.BadRequest {
	st := status.Convert(e)
	for _, detail := range st.Details() {
		switch v := detail.(type) {
		case *errdetails.BadRequest:
			return v
		default:
			return nil
		}
	}

	return nil
}

// validationErrToPBErrors transforms errors into `Error`
func validationErrToPBErrors(err error) []*errdetails.BadRequest_FieldViolation {
	if e, ok := err.(validations.InternalError); ok {
		// an internal error happened
		log.Println(e.InternalError())
		return nil
	}

	verrs := err.(validations.Errors)
	var errs []*errdetails.BadRequest_FieldViolation
	for field, err := range verrs {
		v := &errdetails.BadRequest_FieldViolation{
			Field:       field,
			Description: err.Error(),
		}
		errs = append(errs, v)
	}
	return errs
}
