package mk.ukim.finki.domasna2.service;

import mk.ukim.finki.domasna2.model.User;
import java.util.List;


public interface AuthService {
    User login(String username, String password);
    User register(String username, String password, String repeatPassword,
                  String name, String surname);
    void logout(String username);

    List<User> findAll();

}
