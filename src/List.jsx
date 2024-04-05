import minions from './assets/minions.png' 
import brook from './assets/brook.webp' 
import naruto from './assets/naruto.jpg' 
import soldier from './assets/soldier.jpg' 
import something from './assets/something.png' 

function List() {
    const students = [
      {
        id: 1,
        name: "Shannon",
        email: "shannon@gmail.com",
        profile: minions,
      },
      {
        id: 2,
        name: "Keanu",
        email: "keanu@gmail.com",
        profile: brook,
      },
      {
        id: 3,
        name: "Yase",
        email: "yase@gmail.com",
        profile: naruto,
      },
      {
        id: 4,
        name: "Kobe",
        email: "kobe@gmail.com",
        profile: soldier,
      },
      {
        id: 5,
        name: "Bryant",
        email: "bryant@gmail.com",
        profile: something,
      },
    ];
    
      return students;
}

export default List;