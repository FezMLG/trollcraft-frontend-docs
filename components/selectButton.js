import $ from 'jquery';

function selectButton(){
  $('.choosing').on('click', function(){
    var button = $(event.target);
    var buttons = $(this).find('button');
    if(buttons.hasClass('selected')){
      button.removeClass('selected');
      console.log(button);
    }else{
      button.addClass('selected');
    }
  })
}

export default selectButton;