import $ from 'jquery';

function doSomeStuffOnSave(first){
  var first = first;
  var link = $(".saveInput").closest(".savingContainer");
  var lastChild = $(".savingContainer div").last();
  var numberOf = parseInt(lastChild.attr("input-number")) + 1;
  var input = `
    <div input-number=${numberOf}>
      <input type="text" name="ex1" class="input-box big" placeholder="${numberOf}" />
      <button class="icon primary saveInput">
        <i class="icon back"></i>
      </button>
    </div>
  `;
  $(lastChild).find('.saveInput').removeClass('saveInput').addClass('delInput');
  link.append(input);
}

function doSomeStuffOnDelete(clickedButton){
  clickedButton.parent().remove();
}

function addInput() {
  $(".savingContainer").on("click", 'button.saveInput', function(){
    var first = $(".firstSaving").attr("input-number");
    doSomeStuffOnSave(first);
    console.log("clickde");
  })
  $(".savingContainer").on("click", 'button.delInput', function(){
    var clickedButton = $(this);
    doSomeStuffOnDelete(clickedButton);
  })
}

export default addInput