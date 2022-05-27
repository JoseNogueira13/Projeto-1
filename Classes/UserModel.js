class user {
    username = "";
    password = "";
    email = "";
    experience = 0;
    badges = [];
    saved = [];
    profileType = "";
    
    constructor(username, password, email, experience, badges, saved, profileType) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.experience = experience;
        this.badges = badges;
        this.saved = saved;
        this.profileType = profileType;
      }
}
