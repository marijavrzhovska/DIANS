package mk.ukim.finki.domasna2.model.exceptions;

public class WineryDoesNotExistsException extends RuntimeException{
    public WineryDoesNotExistsException(Long id) {
        super(String.format("Винарија со идентификациски број: %d не постои!"));
    }
}
