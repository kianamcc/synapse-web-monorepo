import{n as o,b as n,Q as a,H as c}from"./iframe-CaNoDgkX.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BVbl7nRF.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-QnxeAXcY.js";import"./index-Ck3YdKMk.js";import"./_baseOrderBy-BoI5oJ1Q.js";import"./_baseIteratee-CeDu17wK.js";import"./_baseMap-DdX9zoAU.js";import"./_baseEach-B_eoSs0M.js";import"./useInfiniteQuery-BwBThpYw.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CC1CTzMx.js";import"./useEntity-JB9BrXEu.js";import"./pickBy-BJzWTAWU.js";import"./isString-uXwuBLj9.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B68J36lQ.js";import"./useGetEntityHeaders-B7VwZuP2.js";import"./EntityIcon-1ADuQDTU.js";import"./ErrorChip-D-XeO5As.js";import"./Chip-QjhKE9v8.js";import"./ListItem-B9Igq2_n.js";import"./listItemButtonClasses-BApiEFYD.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const v=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,v as __namedExportsOrder,f as default};
