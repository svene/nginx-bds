// templates
export function formTemplate(contact) {
    return `<form hx-put="/contact/1" hx-target="this" hx-swap="outerHTML">
  <div>
    <label for="firstName">First Name</label>
    <input autofocus type="text" id="firstName" name="firstName" value="${contact.firstName}">
  </div>
  <div class="form-group">
    <label for="lastName">Last Name</label>
    <input type="text" id="lastName" name="lastName" value="${contact.lastName}">
  </div>
  <div class="form-group">
    <label for="email">Email Address</label>
    <input type="email" id="email" name="email" value="${contact.email}">
  </div>
  <button class="btn" type="submit">Submit</button>
  <button class="btn" hx-get="/contact/1">Cancel</button>
</form>`
}

export function advisorResult(searchString, resultData) {
    let result = '';
    // result += `<bal-list border="true" id="search-result">`;
    resultData.forEach(it => {

        result += `
            <bal-list-item style="cursor: pointer" onclick="alert('TODO: Show details for Advisor 1')">
                <bal-list-item-content>
                    <bal-list-item-title hx-get="">${it.nr} - ${it.name}</bal-list-item-title>
                </bal-list-item-content>
                <bal-list-item-icon right="true">
                    <bal-icon name="nav-go-right" size="x-small"></bal-icon>
                </bal-list-item-icon>
            </bal-list-item>
        `;
    });
    // result += `</bal-list>`;
    return result;
/*
    return `
				<bal-list border="true" id="search-result">
					<bal-list-item style="cursor: pointer" onclick="alert('TODO: Show details for Advisor 1')">
						<bal-list-item-content>
							<bal-list-item-title hx-get="">123456 - Advisor 1</bal-list-item-title>
						</bal-list-item-content>
						<bal-list-item-icon right="true">
							<bal-icon name="nav-go-right" size="x-small"></bal-icon>
						</bal-list-item-icon>
					</bal-list-item>
					<bal-list-item  style="cursor: pointer" onclick="alert('TODO: Show details for Advisor 2')">
						<bal-list-item-content>
							<bal-list-item-title>
								876543 - Advisor 2
							</bal-list-item-title>
						</bal-list-item-content>
						<bal-list-item-icon right="true">
							<bal-icon name="nav-go-right" size="x-small"></bal-icon>
						</bal-list-item-icon>
					</bal-list-item>
				</bal-list>
`;
*/
}
