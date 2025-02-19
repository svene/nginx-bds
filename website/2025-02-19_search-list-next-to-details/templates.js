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
    resultData.forEach(it => {
        result += `
            <bal-list-item
              style="cursor: pointer"
              hx-trigger="click"
              hx-post="/advisordetails"
              hx-vals='{"advisorid": "${it.nr}"}'
              hx-target="#search-result"
              hx-swap="innerHTML"
              >
                <bal-list-item-content>
                    <bal-list-item-title hx-get="">${it.nr} - ${it.name}</bal-list-item-title>
                </bal-list-item-content>
                <bal-list-item-icon right="true">
                    <bal-icon name="nav-go-right" size="x-small"></bal-icon>
                </bal-list-item-icon>
            </bal-list-item>
        `;
    });
    return result;
}
export function advisorDetails(advisorid, detailsData) {
    let result = '';
    result += `
<table class="table w-full is-striped is-hoverable p-none">
  <thead>
    <tr>
    <th>Billing Date</th>
    <th>Portfolio Number</th>
    <th>Name</th>
    <th>Brokerage Fees</th>
    <th>Account Statement</th>
    <th></th>
  </tr>
  </thead>
  <tbody>
`;
        detailsData.forEach(it => {
            result += `
    <tr>
      <td>${it.billingDate}</td>
      <td>${it.nr}</td>
      <td>${it.name}</td>
      <td>${it.brokerageFees}</td>
      <td>${it.accountStatement}</td>
    </tr>
        `;
    });
  result += `
      </tbody>
      </table>
    `;
    return result;
}
