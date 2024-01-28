package mk.ukim.finki.domasna2.model.exceptions;

public class PasswordsDoNotMatchException extends RuntimeException{
    public PasswordsDoNotMatchException() {
        super("Лозинките не се совпаѓаат!");
    }
}
