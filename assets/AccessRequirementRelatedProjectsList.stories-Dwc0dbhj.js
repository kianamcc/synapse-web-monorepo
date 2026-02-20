import{n as o,b as n,Q as a,H as c}from"./iframe-CkxBXYUS.js";import{A as m}from"./AccessRequirementRelatedProjectsList-o5vHT1bM.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CbWhvGoA.js";import"./index-SFhbXU88.js";import"./_baseOrderBy-EYj17sKo.js";import"./_baseIteratee-D3hgKa38.js";import"./_baseMap-BSeajlG7.js";import"./_baseEach-BOfPgxL4.js";import"./useQueries-Yp2j9f7r.js";import"./useInfiniteQuery-GEnPT25t.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DMcBExq9.js";import"./useEntity-D0Vta4xG.js";import"./pickBy-CksjIvz6.js";import"./isString-BRPRh22a.js";import"./useSuspenseQuery-CY63kBJ7.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-FPFa4g8_.js";import"./useGetEntityHeaders-Cmmt_wTI.js";import"./EntityIcon-CiFRTAj-.js";import"./ErrorChip-DuvRmLFR.js";import"./Chip-CZ1spSeI.js";import"./ListItem-1i6bgoDx.js";import"./listItemButtonClasses-Do4tbNvZ.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
