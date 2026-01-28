import{n as o,b as n,O as a,H as c}from"./iframe-DmIbR_r6.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BVOC0Uul.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CQfwC5jP.js";import"./index-Cbto9jav.js";import"./_baseOrderBy-B685EpFZ.js";import"./_baseIteratee-DGiWPmRT.js";import"./_baseMap-CMpD4lY6.js";import"./_baseEach-BQnbae_L.js";import"./useQueries-LRi5eBel.js";import"./useInfiniteQuery-CI1b4wGw.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CpvrM0ik.js";import"./useEntity-Bppk7qsE.js";import"./pickBy-DGqmeqZf.js";import"./isString-krVYXN8Q.js";import"./useSuspenseQuery-Bb68RTLn.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BMJT5xvS.js";import"./useGetEntityHeaders-BRXYbcoe.js";import"./EntityIcon-CgnT9y6Y.js";import"./ErrorChip-DkcHK-RW.js";import"./Chip-BRJez_-q.js";import"./ListItem-D--P9wx6.js";import"./listItemButtonClasses-DEqQDI3y.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const y=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,t as ZeroProjectsMock,y as __namedExportsOrder,H as default};
