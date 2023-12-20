package mk.ukim.finki.domasna2.web.controler;

import mk.ukim.finki.domasna2.model.User;
import mk.ukim.finki.domasna2.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/users")
@Validated
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value="/saveUser")
    public ResponseEntity<String> addUser(
            @RequestBody User user){
        userService.save(user);
        return new ResponseEntity<String>("User Saved", HttpStatus.OK);
    }
}
