function setItemHeight(ele) {
  var description = $(ele).find("item-description")[0];
  var heightCount = 0;
  var heightsIndex = heights.length - 1;

  if ($(window).width() > 768) { //if its mobile just stick to 0 height
    while (heightCount < heightsIndex &&
      description.scrollHeight > sizes[heightCount].scrollHeight + 15 &&
      description.scrollHeight > sizes[Math.min(heightsIndex,heightCount+1)].scrollHeight - 125)
    { heightCount++; }
  }

  if ($(ele).hasClass("image")) { //except for if it has an image
    heightCount = Math.max(1, heightCount); //it has to be at least "tall"
  }

  $(ele).addClass(heights[heightCount]);
  if (description.scrollHeight > description.clientHeight)
    $(ele).addClass("show-more");
}
