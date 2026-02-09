import{n as o,b as n,Q as a,H as c}from"./iframe-_RRtoCIB.js";import{A as m}from"./AccessRequirementRelatedProjectsList-Bv2_NxSU.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BsppqOy_.js";import"./index-C48TJn2v.js";import"./_baseOrderBy-rn73G-Qt.js";import"./_baseIteratee-CgF3Cfek.js";import"./_baseMap-BBX37T8P.js";import"./_baseEach-B8sjjX0y.js";import"./useQueries-BYmqsWy-.js";import"./useInfiniteQuery-DgvZk44b.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DmImJaJb.js";import"./useEntity-BpUor3p8.js";import"./pickBy-ePaWp_IF.js";import"./isString-Cnb8IIp5.js";import"./useSuspenseQuery-IQfUTR9I.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle--Th3pW8L.js";import"./useGetEntityHeaders-CtnowcMw.js";import"./EntityIcon-BrX81wIY.js";import"./ErrorChip-CFq8S0_y.js";import"./Chip-jVD26EQu.js";import"./ListItem-otaNrFJH.js";import"./listItemButtonClasses-r9wN2oqk.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
