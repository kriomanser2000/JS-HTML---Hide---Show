function toggleText()
{
    var text = document.getElementById("hidden-text");
    if(text.classList.contains("hidden"))
    {
        text.classList.remove("hidden");
    }
    else
    {
        text.classList.add("hidden");
    }
}