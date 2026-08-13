initTableOfContents();

function initTableOfContents() {
	const container = document.querySelector("#toc");
	if (!container) return;

	const allHeadings = document.querySelectorAll("h2");
	if (allHeadings.length < 2) return;
	let output = "<ol>";
	[...allHeadings].forEach((headingEl) => {
		const title = headingEl.innerHTML;
		const link =
			headingEl.getAttribute("id") ||
			encodeURI(
				title
					.replaceAll(" ", "-")
					.replaceAll("#", "")
					.replaceAll("&", "")
					.replaceAll(/<[^>]*>?/gm, "")
					.replaceAll("--", "-")
			).toLowerCase();
		headingEl.setAttribute("id", link);
		output += `<li><a onmouseover="mechanical.playclip()" onclick="flashlight.playclip()" href="#${link}" class="link">${title}</a></li>`;
	});
	container.innerHTML = output + "</ol>";
}