const $submit = document.getElementById(".submit");
      $password = document.getElementById(".password");
      $username = document.getElementById(".username");
      $visible = document.getElementById(".visible");
      $btn = document.getElementById("btn");


      document.addEventListener("change", (e)=>{
        if(e.target === $visible){
            if($visible.checked === false) $password.type = "password";
            else $password.type = "text";
        }
      });

      document.addEventListener("click", (e)=>{
        if(e.target === $submit){
            if($password.value !== "" && $username !== ""){
                e.preventDefault();
                window.location.href = "home.html";
            }
        }
      })
      document.addEventListener("click",()=>{
        $username.clasList.toggle("toggle");

      })