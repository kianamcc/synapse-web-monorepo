import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-DcJpmp1V.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-BBENFcBu.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-B2j_oWX0.js";import"./useAccessRequirements-BxiIunOF.js";import"./index-Cg17DPBV.js";import"./_baseOrderBy-CyUXqQnG.js";import"./_baseIteratee-BxQYWf9f.js";import"./_baseMap-DUb_jyqf.js";import"./_baseEach-Da2adyxG.js";import"./useQueries-GjC1PRXV.js";import"./useInfiniteQuery-Btt3ZcbH.js";import"./groupBy-Dc9qnY7L.js";import"./_createAggregator-CBtPbs2o.js";import"./DialogBase-BEjE_oc_.js";import"./Close-Dcx23buO.js";import"./HelpPopover-BE1pk0Q2.js";import"./MarkdownPopover-D3pZUAoK.js";import"./LightTooltip-DLmuU1bJ.js";import"./MarkdownSynapse-Czv-k2yf.js";import"./SkeletonButton-DkRzYKJ9.js";import"./SkeletonInlineBlock-D7vcjj_c.js";import"./SkeletonTable-B6OGgiWA.js";import"./SkeletonParagraph-nIFCADcu.js";import"./EntityLink-DouofJML.js";import"./useEntity-B6ww8tw7.js";import"./pickBy-BKwV6wV9.js";import"./isString-iNb2aTKj.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DBXosuCm.js";import"./useGetEntityHeaders-DztPZVRG.js";import"./EntityIcon-2hQVEtML.js";import"./ErrorChip-DyRcLYGZ.js";import"./Chip-C_u6PkYz.js";import"./UserOrTeamBadge-Cx3E1eWa.js";import"./UserBadge-B6L3dVNq.js";import"./MenuItem-CbRug303.js";import"./Card-BbDWwTKw.js";import"./TeamBadge-CeavigKu.js";import"./UnmanagedACTAccessRequirementItem-Cbg0bBAh.js";import"./RequirementItem-BRtgo0B8.js";import"./LockTwoTone-BeowYLkL.js";import"./UserSearchBoxV2-D5BCjYUs.js";import"./useDebouncedEffect-D9v4yJgt.js";import"./use-deep-compare-effect.esm-COZa2kPC.js";import"./uniq-ChWLIqBD.js";import"./without-iAMJTkRA.js";import"./Select-aab027f3.esm-BD9hNMb4.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-LP_Utlbg.js";import"./SelfSignAccessRequirementItem-DV3FbVau.js";import"./DataAccessRequestAccessorsFilesForm-D9A8Faj8.js";import"./enums-DuJH2RR6.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DTb6uQc4.js";import"./RadioGroup-BgS8C9-L.js";import"./Radio-BuRya3ey.js";import"./SwitchBase-D-XqqAph.js";import"./FormGroup-DqB0AWbo.js";import"./FormControlLabel-BABdeTL-.js";import"./UploadDocumentField-0CfAI9-u.js";import"./FileUpload-CYzxh50Z.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BLthLSE3.js";import"./GridLegacy-CljLB9S3.js";import"./ResearchProjectForm-BhhlW-2Q.js";import"./TextFieldWithWordLimit-DfVJVaoe.js";import"./AuthenticatedRequirement-QDRYMuj3.js";import"./CertificationRequirement-B3cWhGYY.js";import"./TwoFactorAuthEnabledRequirement-XILM2nmo.js";import"./ValidationRequirement-iKaIWlBM.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-DyRUzexW.js";import"./RejectDataAccessRequestModal-CeWrPPWw.js";import"./CannedRejectionDialog-B5TqKILd.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DDza5CfY.js";import"./Checkbox-DxwjfKtk.js";import"./Grid-Iy6KwBDK.js";import"./upperFirst-DPQC0PcZ.js";import"./_stringToArray-DIcXK_uM.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
