package mk.ukim.finki.domasna2.service;

import mk.ukim.finki.domasna2.model.User;


public interface UserService{
    User findByUsername(String username);
    User save(User user);

}
