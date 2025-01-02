package com.musiteca.musiteca_api.exceptions;

import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AccountStatusException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.security.SignatureException;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ProblemDetail handleSecurityException(Exception e) {
        ProblemDetail errorDetail;

        e.printStackTrace();

        switch (e) {
            case BadCredentialsException badCredentialsException -> {
                errorDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(401), e.getMessage());
                errorDetail.setProperty("description", "Incorrect username or password");

                return errorDetail;
            }

            case AccountStatusException accountStatusException -> {
                errorDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), e.getMessage());
                errorDetail.setProperty("description", "Locked account");

                return errorDetail;
            }

            case AccessDeniedException accessDeniedException -> {
                errorDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), e.getMessage());
                errorDetail.setProperty("description", "You are not allowed to access this resource");

                return errorDetail;
            }

            case SignatureException signatureException -> {
                errorDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), e.getMessage());
                errorDetail.setProperty("description", "Invalid JWT Signature");

                return errorDetail;
            }

            case ExpiredJwtException expiredJwtException -> {
                errorDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), e.getMessage());
                errorDetail.setProperty("description", "Expired JWT");

                return errorDetail;
            }

            case MethodArgumentNotValidException methodArgumentNotValidException -> {
                errorDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), e.getMessage());
                errorDetail.setProperty("description", "Invalid input provided");
            }

            case ExistingUserException existingUserException -> {
                errorDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(409), e.getMessage());
                errorDetail.setProperty("description", "A user with this email already exists");
            }

            default -> {
                errorDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(500), e.getMessage());
                errorDetail.setProperty("description", "Internal Server Error");

                return errorDetail;
            }
        }

        return errorDetail;
    }
}
