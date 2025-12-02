import{n as u,b as l,O as j,H as P}from"./iframe-D2BiYAJm.js";import{A as I}from"./AccessRequirementRelatedProjectsList-IYpZpG40.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CqTXspdJ.js";import"./index-B3O79Ih6.js";import"./_baseOrderBy-NSrYaCdk.js";import"./_baseIteratee-DJIGxw8_.js";import"./_baseMap-wsin_ybF.js";import"./_baseEach-lVBn3sji.js";import"./useQueries--e6O_A4l.js";import"./useInfiniteQuery-Sh2g8CYk.js";import"./pluralize-CC--1ngb.js";import"./EntityLink-BbRJdtHm.js";import"./useEntity-Do9HpzC8.js";import"./pickBy-D-9P8-F0.js";import"./isString-nCXr2nXn.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-iVaLoLsq.js";import"./useGetEntityHeaders-fhKOQ1W-.js";import"./EntityIcon-POzxmOV5.js";import"./ErrorChip-DOeXs4DE.js";import"./Chip-c69jX1Rh.js";import"./ListItem-5fUPJfEc.js";import"./listItemButtonClasses-DUq_dJ2b.js";const L={title:"Governance/AccessRequirementRelatedProjectsList",component:I},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[u.post(`${l}${j}`,()=>{const R={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return P.json(R,{status:200})})]}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var a,c,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,p,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const Q=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,t as ZeroProjectsMock,Q as __namedExportsOrder,L as default};
