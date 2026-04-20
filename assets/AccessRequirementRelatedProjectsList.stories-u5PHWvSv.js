import{s as o,b as n,O as a,H as c}from"./iframe-Bs_Prdk_.js";import{A as m}from"./AccessRequirementRelatedProjectsList-B23v5YDQ.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BiE3W169.js";import"./index-CYslwlK8.js";import"./_baseOrderBy-13wKc7Kr.js";import"./_baseIteratee-BdtYTyfi.js";import"./_baseMap-BYoRMOp3.js";import"./_baseEach-zH0fr7Ws.js";import"./useInfiniteQuery-BFUuL85S.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BTRQjjgS.js";import"./useEntity-Bj3sdFpz.js";import"./pickBy-BnnItINO.js";import"./isString-CeR9rsaU.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-rbEL0P-Z.js";import"./useGetEntityHeaders-X4MkpsGI.js";import"./EntityIcon-DxmN604Z.js";import"./ErrorChip-cMzyHkYb.js";import"./Chip-D6_WALXy.js";import"./ListItem-Mn3T96Ix.js";import"./listItemButtonClasses-BakoQbJF.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
