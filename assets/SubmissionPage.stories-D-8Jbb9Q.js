import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,ku as i,kv as C,H as s,kw as l,p as m,kx as b,ky as T,k9 as A}from"./iframe-BXWMp6Ce.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-7hdHLB-e.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-Blvq8nqb.js";import"./useAccessRequirements-CECAzFll.js";import"./index-CfxawqaX.js";import"./_baseOrderBy-IE-2_fKu.js";import"./_baseIteratee-9dv7RfxS.js";import"./_baseMap-D34HiNXT.js";import"./_baseEach-BVzTx-E1.js";import"./useQueries-DqcM-HR_.js";import"./useInfiniteQuery-CyFXXCnn.js";import"./groupBy-CkYWufxH.js";import"./_createAggregator-DdlbAIY4.js";import"./DialogBase-Bpmkqx5q.js";import"./Close-3lD1GSjC.js";import"./HelpPopover-Mk5t2Cbj.js";import"./MarkdownPopover-DupBwi5m.js";import"./LightTooltip-BWeLAStW.js";import"./MarkdownSynapse-BHs5qIjd.js";import"./SkeletonButton-D-O8A1CK.js";import"./SkeletonInlineBlock-B2BP_SJl.js";import"./SkeletonTable-fAq5iwau.js";import"./SkeletonParagraph-BJcHUZ4o.js";import"./EntityLink-xAsPam6H.js";import"./useEntity-D-mnOD8c.js";import"./pickBy-C_JdhcyJ.js";import"./isString-iCM9BWBq.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DD6px5w_.js";import"./useGetEntityHeaders-Dav4jfNI.js";import"./EntityIcon-CA8vYR8F.js";import"./ErrorChip-CtRuBB-E.js";import"./Chip-r_XzcIen.js";import"./UserOrTeamBadge-DiNWhzoh.js";import"./UserBadge-BX3dmPcL.js";import"./MenuItem-CaHzOUpM.js";import"./Card-CJycqTtX.js";import"./TeamBadge-CZRad4Nq.js";import"./UnmanagedACTAccessRequirementItem-BC3C-kFt.js";import"./RequirementItem-BUg0oMaQ.js";import"./LockTwoTone-Bt0CVgDS.js";import"./UserSearchBoxV2-ll7qi3IQ.js";import"./useDebouncedEffect-192asUuV.js";import"./use-deep-compare-effect.esm-5It3HpKk.js";import"./uniq-D5B3zGmk.js";import"./without-iHOmdpB0.js";import"./Select-aab027f3.esm-CV6D3IOI.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-B6BNLJ4r.js";import"./SelfSignAccessRequirementItem-C6c2adWE.js";import"./DataAccessRequestAccessorsFilesForm-BBHa6agw.js";import"./enums-BFBHCiCF.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DvPlALIs.js";import"./RadioGroup-BTZuuphD.js";import"./Radio-Bni7GtxK.js";import"./SwitchBase-bVvO_LRY.js";import"./FormGroup-DWDmQdE6.js";import"./FormControlLabel-Jukgt1aX.js";import"./UploadDocumentField-CSLUQW3T.js";import"./FileUpload-KB25KI_g.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B0AB12Wk.js";import"./GridLegacy-CM0PT94L.js";import"./ResearchProjectForm-CPQu1wiK.js";import"./TextFieldWithWordLimit-EnEt4Zde.js";import"./AuthenticatedRequirement-CxqtwSCH.js";import"./CertificationRequirement-C9Ve4A4n.js";import"./TwoFactorAuthEnabledRequirement-CGa6iEj-.js";import"./ValidationRequirement-BMU1bAep.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-g2dNLOxL.js";import"./RejectDataAccessRequestModal-CH7Yx2Og.js";import"./CannedRejectionDialog-Cr9tqYQk.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-B4c7aCoP.js";import"./Checkbox-BhF27RVr.js";import"./Grid-DFJawvhd.js";import"./upperFirst-D9AvruKV.js";import"./_stringToArray-iLT2G9x_.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
