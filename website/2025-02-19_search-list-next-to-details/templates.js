export function initial() {
    return `
  <main class="container mt-xx-large">
    <bal-heading>Use Case: search, list, next-icon to details-list</bal-heading>
    <bal-card>
      <bal-card-content data-id="card-content">
        <form>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input"
                   name="searchvalue"
                   hx-trigger="input changed delay:500ms, keyup[key=='Enter']"
                   hx-post="/searchadvisor"
                   hx-target="[data-id=search-result]"
                   hx-swap="innerHtml"
              >
            </div>
          </div>
        </form>

        <!-- Search Results: -->
        <bal-list data-id="search-result"></bal-list>
      </bal-card-content>
    </bal-card>
  </main>
`
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
              hx-target="[data-id=card-content]"
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
        return result;
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
      <bal-button hx-post="/start" hx-target="[data-id=app-container]">Back</bal-button>
    `;
    return result;
}

export function searchForm() {
    return `
<form>
<div class="field">
<label class="label">Name</label>
<div class="control">
<input class="input"
   name="searchvalue"
   hx-trigger="input changed delay:500ms, keyup[key=='Enter']"
   hx-post="/searchadvisor"
   hx-target="[data-id=search-result]"
   hx-swap="innerHtml"
>
</div>
</div>
</form>
   
`
}

