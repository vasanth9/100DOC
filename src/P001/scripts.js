const profileName = document.getElementById("profile_name");
const generateBtn = document.getElementById("generate_btn");

const URL = "https://api.github.com/";

generateBtn.addEventListener("click", () => {
  getUserData(profileName.value);
});

const getUserData = async (username) => {
  axios
    .get(URL + "users/" + username)
    .then((response) => {
      const {data, status} = response;
      if(status===200){
        var ouputDiv = `<img class="avatar" src=${data.avatar_url} alt="avatar" />
        <div className="github_bio">
          <h2>${data.name}</h2>
          <p>${data.bio}</p>
          <div class="number_container">
          <span><b>${data.followers}</b> followers</span>
          <span><b>${data.public_repos}</b> repos</span>
          </div>
        </div>
        <div>
          <a href=${data.html_url} target="_blank"><button class="generate">Visit Profile</button></a>
        </div>
        
        `;
        document.getElementById("profile_container").innerHTML=ouputDiv;
        document.getElementById("profile_container").style.display="flex";

      }
    })
    .catch((err)=>console.log(err));
};

