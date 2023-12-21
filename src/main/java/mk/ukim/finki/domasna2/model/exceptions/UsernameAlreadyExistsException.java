package mk.ukim.finki.domasna2.model.exceptions;

public class UsernameAlreadyExistsException extends RuntimeException{
    public UsernameAlreadyExistsException(String username) {
        super(String.format("Корисник со корисничко име %s веќе постои!", username));
    }
}
