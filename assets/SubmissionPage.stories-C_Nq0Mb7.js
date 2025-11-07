import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-BrPoS5FB.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-BRpgJN73.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-C9JQZqKa.js";import"./useAccessRequirements-BPxMD1gB.js";import"./index-DvTUvNEA.js";import"./_baseOrderBy-Cn_fRb0Q.js";import"./_baseIteratee-CvXiprSM.js";import"./_baseMap-DYpYkmQM.js";import"./_baseEach-C6u6dmNB.js";import"./useQueries-QoUoMS77.js";import"./useInfiniteQuery-Wta0toVI.js";import"./groupBy-B5FoRQae.js";import"./_createAggregator-WwY_axAV.js";import"./DialogBase-BJrucS8y.js";import"./Close-CvEU7XhU.js";import"./HelpPopover-CWV6J_Zt.js";import"./MarkdownPopover-xwCpjde8.js";import"./LightTooltip-BkLp4ozd.js";import"./MarkdownSynapse-OD1xjODX.js";import"./SkeletonButton-2N5ZG66q.js";import"./SkeletonInlineBlock-CU1JeY6s.js";import"./SkeletonTable-7Ts_fDyw.js";import"./SkeletonParagraph-BRiZwInB.js";import"./EntityLink-hZQKarxH.js";import"./useEntity-BY2eC-gV.js";import"./pickBy-Bn-Uz9RE.js";import"./isString-BsQ6DP0w.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B_VZ6xLf.js";import"./useGetEntityHeaders-jkqdfalW.js";import"./EntityIcon-CVqzrqSS.js";import"./ErrorChip-B38qiAIh.js";import"./Chip-ZRMOIwtV.js";import"./UserOrTeamBadge-BMYu1Ydp.js";import"./UserBadge-CZtFy4gZ.js";import"./MenuItem-BrM7IBWv.js";import"./Card-By5M3Dgz.js";import"./TeamBadge-BVLB9thB.js";import"./UnmanagedACTAccessRequirementItem-CcpRkY1D.js";import"./RequirementItem-CO8W-qHi.js";import"./LockTwoTone-BgjgwmtN.js";import"./UserSearchBoxV2-9M3xwGVq.js";import"./useDebouncedEffect-BfgveUUS.js";import"./use-deep-compare-effect.esm-DwC_8CZ3.js";import"./uniq-Dpgqo0aV.js";import"./without-5kSadi0e.js";import"./Select-aab027f3.esm-B3XtMyXH.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BgG6us4J.js";import"./SelfSignAccessRequirementItem-BEzYvpMP.js";import"./DataAccessRequestAccessorsFilesForm-C-ZOAcMo.js";import"./enums-B5RIP5hg.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-BSmJvhwO.js";import"./RadioGroup-T32YVtXQ.js";import"./Radio-B3ZeirML.js";import"./SwitchBase-CMKAbFTe.js";import"./FormGroup-DTZuaAj9.js";import"./FormControlLabel-y0w6AE6J.js";import"./UploadDocumentField-CFjPcY4l.js";import"./FileUpload-B2Mfdb3h.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DbIxOste.js";import"./GridLegacy-Bm04NSmC.js";import"./ResearchProjectForm-ypWixnbe.js";import"./TextFieldWithWordLimit-D5pi1rpN.js";import"./AuthenticatedRequirement-B_54HgcN.js";import"./CertificationRequirement-D7gmmxqH.js";import"./TwoFactorAuthEnabledRequirement-C4-Nm3Yx.js";import"./ValidationRequirement-ckFcorIk.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-Uh0jVuea.js";import"./RejectDataAccessRequestModal-C4nbzFUS.js";import"./CannedRejectionDialog-BhVBdXOu.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-Bgh6yuP1.js";import"./Checkbox-BvD29YM_.js";import"./Grid-CDuVaWcE.js";import"./upperFirst-t9Tgc2Vy.js";import"./_stringToArray-CxtKNBrf.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
