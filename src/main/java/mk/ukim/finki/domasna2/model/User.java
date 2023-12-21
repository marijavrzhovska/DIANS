package mk.ukim.finki.domasna2.model;

import jakarta.persistence.*;
import lombok.Data;
import mk.ukim.finki.domasna2.model.enumerations.UserStatus;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "winery_users")
public class User {
    @Id
    private String username;
    private String name;
    private String surname;
    private String password;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_winery_list")
    private List<Winery> wineryList;

    @Enumerated(EnumType.STRING)
    private UserStatus status;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Rate> rates;

    public User() {
    }

    public User(String username, String name, String surname, String password) {
        this.username = username;
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.wineryList = new ArrayList<>();
        this.status = UserStatus.LOGGED_OUT;
        this.rates = new ArrayList<>();
    }
}
