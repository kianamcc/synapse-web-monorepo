import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-i1vzbyyB.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-CrUBKaUx.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-C6Wvs6Do.js";import"./useAccessRequirements-LLgpMw9k.js";import"./index-CEeSGOsu.js";import"./_baseOrderBy-CA2OdoZN.js";import"./_baseIteratee-BWFHBg8a.js";import"./_baseMap-GgotyBlD.js";import"./_baseEach-DkO-hquC.js";import"./useQueries-CBjjpUwX.js";import"./useInfiniteQuery-Cp3zF6id.js";import"./groupBy-D6TU_PwU.js";import"./_createAggregator-CYYsYhv7.js";import"./DialogBase-CnzJW4Vm.js";import"./Close-BcpwEnYM.js";import"./HelpPopover-D6TWnFMx.js";import"./MarkdownPopover-BjxGRa1i.js";import"./LightTooltip-DG7_ftuI.js";import"./MarkdownSynapse-ofrcwXhb.js";import"./SkeletonButton-BHwx8d5H.js";import"./SkeletonInlineBlock-CUOfhEKh.js";import"./SkeletonTable-B_XrK9-X.js";import"./SkeletonParagraph-CCi6Cu6y.js";import"./EntityLink-D1fx9i_m.js";import"./useEntity-DlUlPmZB.js";import"./pickBy-BJ6lIa9n.js";import"./isString-Ce7Ri8wU.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DzQbuy3_.js";import"./useGetEntityHeaders-EqT6gqNZ.js";import"./EntityIcon-B0NToxmb.js";import"./ErrorChip-m-vISYyV.js";import"./Chip-CnB9FDDp.js";import"./UserOrTeamBadge-BkZnLJBa.js";import"./UserBadge-BbrHVLhW.js";import"./MenuItem-tnFeCmzc.js";import"./Card-C6x5W7R6.js";import"./TeamBadge-BSux7N22.js";import"./UnmanagedACTAccessRequirementItem-C0N3u1oZ.js";import"./RequirementItem-CbNDyzIp.js";import"./LockTwoTone-2eOmeGwb.js";import"./UserSearchBoxV2-CQg3tJw3.js";import"./useDebouncedEffect-C1rNl5HJ.js";import"./use-deep-compare-effect.esm-DEN-S5AF.js";import"./uniq-BPWKJIgS.js";import"./without-BtyDeKgp.js";import"./Select-aab027f3.esm-C-EuH7mP.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BPn5HKTn.js";import"./SelfSignAccessRequirementItem-Bn9qu5P_.js";import"./DataAccessRequestAccessorsFilesForm-CfzsuvrI.js";import"./enums-B8xGUC0s.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DHWAcOth.js";import"./RadioGroup-BjGaKkxo.js";import"./Radio-oSOPFJwQ.js";import"./SwitchBase-gKvlxrU5.js";import"./FormGroup-DPlDi_rq.js";import"./FormControlLabel-CF4egUKt.js";import"./UploadDocumentField-CUxJYROe.js";import"./FileUpload--PdpGEF8.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Cq2ivdjg.js";import"./GridLegacy-DzxlY56w.js";import"./ResearchProjectForm-Ckp758sp.js";import"./TextFieldWithWordLimit-Di6S-vkF.js";import"./AuthenticatedRequirement-pikBpo0A.js";import"./CertificationRequirement-CUWB30ay.js";import"./TwoFactorAuthEnabledRequirement-BefgfgRK.js";import"./ValidationRequirement-pyCtHoEb.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BlVa3rEd.js";import"./RejectDataAccessRequestModal-Czwfq5CC.js";import"./CannedRejectionDialog-CbD9kv3K.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-CjCOKckI.js";import"./Checkbox-CmnSISLK.js";import"./Grid-jDXwWxNI.js";import"./upperFirst-Km-DXWvI.js";import"./_stringToArray-BrknVI_u.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,R;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const sr=["Demo","DemoError"];export{o as Demo,n as DemoError,sr as __namedExportsOrder,tr as default};
