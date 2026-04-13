import{s as o,b as n,O as a,H as c}from"./iframe--4PIu_qy.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DzvxZcm0.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Cr13h6sL.js";import"./index-CSX6v4C9.js";import"./_baseOrderBy-DJeSI1T-.js";import"./_baseIteratee-SIQo37mB.js";import"./_baseMap-g_gQXiqC.js";import"./_baseEach-BxD8QyVu.js";import"./useInfiniteQuery-BFK5ZSa-.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BeOo-rN3.js";import"./useEntity-D_kREN9m.js";import"./pickBy-C1osi4Ck.js";import"./isString-CD5owZVJ.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BHtkgNE4.js";import"./useGetEntityHeaders-BLRoxb3M.js";import"./EntityIcon-BTP7ny_8.js";import"./ErrorChip-Dyu16oaA.js";import"./Chip-DEb3tB_0.js";import"./ListItem-BVZVck8C.js";import"./listItemButtonClasses-MSv5oEqJ.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
