package mk.ukim.finki.domasna2.repository;

import mk.ukim.finki.domasna2.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
}
