import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-Bs_Prdk_.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CyNO0mZZ.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-85-fM7_P.js";import"./useAccessRequirements-BiE3W169.js";import"./index-CYslwlK8.js";import"./_baseOrderBy-13wKc7Kr.js";import"./_baseIteratee-BdtYTyfi.js";import"./_baseMap-BYoRMOp3.js";import"./_baseEach-zH0fr7Ws.js";import"./useInfiniteQuery-BFUuL85S.js";import"./groupBy-ClsdLMNN.js";import"./_createAggregator-DZmYkOJU.js";import"./DialogBase-CNTtoPKS.js";import"./Close-Dhu31KS6.js";import"./HelpPopover-DsZu1FFV.js";import"./MarkdownPopover-CEEU5Nmq.js";import"./LightTooltip-COqi4IFI.js";import"./MarkdownSynapse-BoHcENa8.js";import"./SkeletonButton-B-1H7QMA.js";import"./SkeletonInlineBlock-Djc2NMos.js";import"./SkeletonTable-Q4aEQVXF.js";import"./SkeletonParagraph-NTXhe3CA.js";import"./EntityLink-BTRQjjgS.js";import"./useEntity-Bj3sdFpz.js";import"./pickBy-BnnItINO.js";import"./isString-CeR9rsaU.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-rbEL0P-Z.js";import"./useGetEntityHeaders-X4MkpsGI.js";import"./EntityIcon-DxmN604Z.js";import"./ErrorChip-cMzyHkYb.js";import"./Chip-D6_WALXy.js";import"./UserOrTeamBadge-BBCgIxYc.js";import"./UserBadge-DwAlTeJ-.js";import"./useUserBundle-CXGw3t_9.js";import"./MenuItem-DQ2i9Xmi.js";import"./Card-1Ir83r-T.js";import"./TeamBadge-DScDjw1f.js";import"./UnmanagedACTAccessRequirementItem-rWN4rozz.js";import"./RequirementItem-Coac9C8A.js";import"./CheckTwoTone-DIh50rhr.js";import"./ManagedACTAccessRequirementItemView--Ks8ZlnS.js";import"./SelfSignAccessRequirementItem-LqFwb1oU.js";import"./DataAccessRequestAccessorsFilesForm-CGannwNR.js";import"./enums-BcfJDIZV.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-C6U58XJ2.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BaKxs_Di.js";import"./UserSearchBox-UYyUJ3PA.js";import"./useDebouncedEffect-EGZtbiV8.js";import"./Autocomplete-DzYLqFiJ.js";import"./usePreviousProps-_O8gdq38.js";import"./RadioGroup-_hPcb7DO.js";import"./Radio-B_jSkH30.js";import"./SwitchBase-CC1BS3iN.js";import"./FormGroup-D8Xw06dH.js";import"./FormControlLabel-D0PCi45L.js";import"./UploadDocumentField-D7s8vC-i.js";import"./FileUpload-cjUyMlgJ.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BRL9khM7.js";import"./GridLegacy-AyYXb3DV.js";import"./ResearchProjectForm-BMpgKZOf.js";import"./TextFieldWithWordLimit-BWwEYaLR.js";import"./AuthenticatedRequirement-xX0CMLBE.js";import"./CertificationRequirement--us4QYNg.js";import"./TwoFactorAuthEnabledRequirement-5YgL_ySI.js";import"./ValidationRequirement-B39gc5Vs.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BE-p1nrH.js";import"./RejectDataAccessRequestModal-C8ECcAMF.js";import"./CannedRejectionDialog-DNu4k5OA.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-fiIuTmNs.js";import"./Checkbox-e_vFu3N4.js";import"./Grid-CR1iINHr.js";import"./upperFirst-C7XUPj8Z.js";import"./_stringToArray-DBhlK6mV.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'SubmissionPage',
  loaders: [() => registerTableQueryResult({
    sql: \`SELECT * FROM \${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}\`
  }, mockRejectionReasonsTableQueryResultBundle)],
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN),
      // Return submission based on ID
      http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, ({
        params
      }) => {
        const submission = mockSubmissions.find(submission => params.id === submission.id);
        return HttpResponse.json(submission, {
          status: 200
        });
      }),
      // Return a mocked access requirement
      http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_BY_ID(':id')}\`, () => {
        return HttpResponse.json(mockManagedACTAccessRequirement, {
          status: 200
        });
      }), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}\`, () => {
        return HttpResponse.json({
          wikiPageId: 123,
          ownerObjectId: mockManagedACTAccessRequirement.id,
          ownerObjectType: 'ACCESS_REQUIREMENT'
        }, {
          status: 200
        });
      }), http.get<{
        id: string;
      }>(\`\${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl\`, ({
        params
      }) => {
        return HttpResponse.json({
          id: params.id,
          creationDate: '2022-05-20T14:32:31.665Z',
          etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
          resourceAccess: [{
            principalId: MOCK_USER_ID_2,
            accessType: ['REVIEW_SUBMISSIONS']
          }]
        }, {
          status: 200
        });
      }), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), http.put(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, async ({
        request
      }) => {
        return HttpResponse.json(await request.json(), {
          status: 201
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 1
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Demo Error State',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, () => {
        const errorResponse: ErrorResponse = {
          reason: 'The user must be validated in order to review data access submissions.',
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse'
        };
        return HttpResponse.json(errorResponse, {
          status: 403
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 9999
  }
}`,...n.parameters?.docs?.source}}};const Je=["Demo","DemoError"];export{o as Demo,n as DemoError,Je as __namedExportsOrder,xe as default};
