var usr_input;
var usr_index;

function do_game() {
  var finished = false;
  var number_of_guess = 0;
  color_list = ["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "red", "white", "yellow"];
  var color_str = color_list.join();
  var random_index = Math.floor(10*Math.random());
  var target_color = color_list[random_index];
  var prompt_string= "I am thinking one of these colors:\n\n"+color_str+"\n\nWhat color am I thinking of?";
  while (!finished) {
    usr_input = prompt(prompt_string);
    usr_index = color_list.indexOf(usr_input);
    number_of_guess++;
    if(usr_index == random_index){
      finished = true;
      alert("You are right! My color is "+color_list[random_index]+"!\nThe number of guess is "+number_of_guess+"!");
    }
  }

}
