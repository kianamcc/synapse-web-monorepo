import{s as o,b as n,O as a,H as c}from"./iframe-DhktRnIr.js";import{A as m}from"./AccessRequirementRelatedProjectsList-geMRvkfL.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-T5gXkMsQ.js";import"./index-Bnjaz154.js";import"./_baseOrderBy-CNqQo0rK.js";import"./_baseIteratee-j03d5HAz.js";import"./_baseMap-DQ2ohJqA.js";import"./_baseEach-BF0Qvnln.js";import"./useInfiniteQuery-CS92RVBN.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-48KGLctU.js";import"./useEntity-CUv7_orb.js";import"./pickBy-DMr8oMN4.js";import"./isString-3MwD6H2V.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-RWHJm12U.js";import"./useGetEntityHeaders-98E5Naf4.js";import"./EntityIcon-BI5d33IB.js";import"./ErrorChip-yT-v9atK.js";import"./Chip-yuMuQ34K.js";import"./ListItem-BdHD9l4y.js";import"./listItemButtonClasses-DLEBOaTr.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
