package mk.ukim.finki.domasna2.model.exceptions;

public class InvalidUserCredentialsException extends RuntimeException{
    public InvalidUserCredentialsException() {
        super("Погрешно корисничко име или лозинка!");
    }
}
