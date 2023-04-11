let date;
let month = [];
function Main()
{
	date = new Date();
	SetDate();
}

function SetDate()
{
	month = document.getElementsByClassName("currentMonth");
	for (let i = 0; i <= 31; i++)
	{
		if (month[i].innerHTML.toString().includes(date.getDate()))
		{
			month[i].className += " today";
			return;
		}
	}
}
function AddEvent(dayNumber, eventName, eventLink)
{
	for (let i = 0; i <= 31; i++)
	{
		if (month[i].innerHTML.toString().includes(dayNumber))
		{
			month[i].innerHTML += `
			<div class="event">
				<a href="${eventLink}">${eventName}</a>
			</div>
			`;
			return;
		}
	}
}