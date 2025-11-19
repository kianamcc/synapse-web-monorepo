import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-C0EDAYOb.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-BppliF_L.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-jTI5xjMr.js";import"./useAccessRequirements-C5-efajy.js";import"./index-DT4yBOOW.js";import"./_baseOrderBy-CtD5rXPh.js";import"./_baseIteratee-CeH0Ppbj.js";import"./_baseMap-CEkFJX7B.js";import"./_baseEach-kVs1Rjlc.js";import"./useQueries-D0oD4fCs.js";import"./useInfiniteQuery-g2YGmReL.js";import"./groupBy-D5lNPpO5.js";import"./_createAggregator-CAAhSN02.js";import"./DialogBase-DTRZNGue.js";import"./Close-CBdWnCyO.js";import"./HelpPopover-C5OHt5Yx.js";import"./MarkdownPopover-Bc_MwBRJ.js";import"./LightTooltip-DLf2qHuv.js";import"./MarkdownSynapse-CUgM0RYh.js";import"./SkeletonButton-DQkh7W-Z.js";import"./SkeletonInlineBlock-j6WQJRAi.js";import"./SkeletonTable-D7smPBDi.js";import"./SkeletonParagraph-MzkgbjcW.js";import"./EntityLink-Cg_kv2uF.js";import"./useEntity-B6z886XJ.js";import"./pickBy-Cap1n3wD.js";import"./isString-55kpGADB.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Dc60Yvf4.js";import"./useGetEntityHeaders-DSETi-y5.js";import"./EntityIcon-Dzf75Id1.js";import"./ErrorChip-DmQbb8Y1.js";import"./Chip-C_ROoNKv.js";import"./UserOrTeamBadge-CD2U-BXA.js";import"./UserBadge-cmjQhfPj.js";import"./MenuItem-D9UPWW8O.js";import"./Card-jCkBYLfN.js";import"./TeamBadge-CNcbdGRg.js";import"./UnmanagedACTAccessRequirementItem-B8MbORcb.js";import"./RequirementItem-DKlZBiGh.js";import"./LockTwoTone-B2hGpHqR.js";import"./UserSearchBoxV2-XdlKEaP7.js";import"./useDebouncedEffect-CI1arYuO.js";import"./use-deep-compare-effect.esm-KpsN59b5.js";import"./uniq-D40s3xcZ.js";import"./without-DN4SSwGZ.js";import"./Select-aab027f3.esm-vdFx59Ya.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-Mq38omkh.js";import"./SelfSignAccessRequirementItem-CqJ8M-iW.js";import"./DataAccessRequestAccessorsFilesForm-DGn2Jyjb.js";import"./enums-BpoV2U7J.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-Tm0zBHZY.js";import"./RadioGroup-Bl759n1r.js";import"./Radio-C9_TJdvm.js";import"./SwitchBase-CdmxqW8G.js";import"./FormGroup-rqQYZvQE.js";import"./FormControlLabel-MbC-HD77.js";import"./UploadDocumentField-BBXK5zgh.js";import"./FileUpload-BCJefToq.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BQWyE-XE.js";import"./GridLegacy-DBcQPdW0.js";import"./ResearchProjectForm-mpJDd_eY.js";import"./TextFieldWithWordLimit-DBhKTvbk.js";import"./AuthenticatedRequirement-CHowgKL7.js";import"./CertificationRequirement-BHCUFAip.js";import"./TwoFactorAuthEnabledRequirement-D5y2vPv7.js";import"./ValidationRequirement-CiKdxXcE.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-DxkSqaxl.js";import"./RejectDataAccessRequestModal-DnjDmK5b.js";import"./CannedRejectionDialog-BZzJkw4G.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-CI46FDJX.js";import"./Checkbox-CYLG-jSh.js";import"./Grid-CX7-HW6Q.js";import"./upperFirst-BEFgTqyg.js";import"./_stringToArray-DbCCUx4Q.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
