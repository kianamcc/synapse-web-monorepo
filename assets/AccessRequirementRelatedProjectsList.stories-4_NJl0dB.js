import{s as o,b as n,O as a,H as c}from"./iframe-BoShs1FP.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BuPxvaZ1.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CwcHVqoa.js";import"./index-C5DEBePd.js";import"./_baseOrderBy-BYJRFfwz.js";import"./_baseIteratee-aOl2kpXV.js";import"./_baseMap-BJz-4MUP.js";import"./_baseEach-CEqVgz86.js";import"./useInfiniteQuery-CWe3h_-o.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DNV7s2M0.js";import"./useEntity-DOu9xB2b.js";import"./pickBy-CcwyYgKj.js";import"./isString-CnVi7tYZ.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DsjH3l1j.js";import"./useGetEntityHeaders-DIiauxS4.js";import"./EntityIcon-MH9tpPIg.js";import"./ErrorChip-CAM7Wt2C.js";import"./Chip-BLhbfSeY.js";import"./ListItem-Bl46HNn4.js";import"./listItemButtonClasses-BmmzCt_y.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 1234567
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
      // searchAccessRequirements
      http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_SEARCH}\`, () => {
        const zeroRelatedProjects = {
          results: [{
            id: '1234567',
            type: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
            createdOn: '2017-08-23T18:48:20.892Z',
            modifiedOn: '2023-12-14T00:43:41.315Z',
            name: 'Team AR without Related Projects',
            version: '1',
            relatedProjectIds: [],
            reviewerIds: []
          }]
        };
        return HttpResponse.json(zeroRelatedProjects, {
          status: 200
        });
      })]
    }
  }
}`,...s.parameters?.docs?.source}}};const H=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,H as __namedExportsOrder,v as default};
