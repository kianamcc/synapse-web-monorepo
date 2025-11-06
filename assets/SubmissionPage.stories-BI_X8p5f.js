import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-HeQVN1jZ.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-DIZpmZEW.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-BHa7fP9U.js";import"./useAccessRequirements-CUug7qrQ.js";import"./index-CJwnjHko.js";import"./_baseOrderBy-DUTEyv-M.js";import"./_baseIteratee-BVM6Exab.js";import"./_baseMap-Dbza7fMM.js";import"./_baseEach-Be_D6xST.js";import"./useQueries-v3Tbkcys.js";import"./useInfiniteQuery-C6LumC3A.js";import"./groupBy-B5ND7QzU.js";import"./_createAggregator-BggQMZxU.js";import"./DialogBase-DCgMnFnd.js";import"./Close-C0SGxNg2.js";import"./HelpPopover-_-ow38BJ.js";import"./MarkdownPopover-DCouyG3a.js";import"./LightTooltip-DzooIRNq.js";import"./MarkdownSynapse-Bxjue5NL.js";import"./SkeletonButton-BHe8ofYu.js";import"./SkeletonInlineBlock-BlMS0EJx.js";import"./SkeletonTable-CVLaQigb.js";import"./SkeletonParagraph-DAxVwEIJ.js";import"./EntityLink-CZE2cWW0.js";import"./useEntity-CdX0hCma.js";import"./pickBy-BzTD-lxq.js";import"./isString-BK7NEvo2.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CR3JdWIx.js";import"./useGetEntityHeaders-BWdFUsOt.js";import"./EntityIcon-B3TfgvPE.js";import"./ErrorChip-0fOvQqqS.js";import"./Chip-Cdmctrnd.js";import"./UserOrTeamBadge-Bh5LWKpf.js";import"./UserBadge-BnA1hz1A.js";import"./MenuItem-BgyGhhI7.js";import"./Card-CmXzjnFc.js";import"./TeamBadge-CtR96slL.js";import"./UnmanagedACTAccessRequirementItem-DFxSNAwr.js";import"./RequirementItem-BKrMVOxY.js";import"./LockTwoTone-DZhAlAAH.js";import"./UserSearchBoxV2-C8yZNZhx.js";import"./useDebouncedEffect-D63JJIyo.js";import"./use-deep-compare-effect.esm-BqIlrlNY.js";import"./uniq-DE7sbJg2.js";import"./without-VTd3I4C-.js";import"./Select-aab027f3.esm-CF1T7Z2j.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-B-Ei4DOM.js";import"./SelfSignAccessRequirementItem-BeolnUJQ.js";import"./DataAccessRequestAccessorsFilesForm-BprQfOAz.js";import"./enums-JwbAtxFF.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DljQI3Mz.js";import"./RadioGroup-VqRGQ4U5.js";import"./Radio-mTIG_Ea1.js";import"./SwitchBase-zArA2Cyl.js";import"./FormGroup-Br1Fs8sm.js";import"./FormControlLabel-C9w-gagr.js";import"./UploadDocumentField-DWwauCyg.js";import"./FileUpload-Cb-bfQc6.js";import"./ManagedACTAccessRequirementFormWikiWrapper-VTsegcgl.js";import"./GridLegacy-DsDByzDs.js";import"./ResearchProjectForm-TS8jc7rh.js";import"./TextFieldWithWordLimit-D1slSUGC.js";import"./AuthenticatedRequirement-D7qUZdI6.js";import"./CertificationRequirement-BVFBFFav.js";import"./TwoFactorAuthEnabledRequirement--uP4YaJw.js";import"./ValidationRequirement-iurGwzfG.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-DtyAg-XT.js";import"./RejectDataAccessRequestModal-QkP4l-iz.js";import"./CannedRejectionDialog-DPoDD-8v.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DKwNuu_8.js";import"./Checkbox-Dtmrm5DB.js";import"./Grid-BVEDu4UK.js";import"./upperFirst-u4-lXKsW.js";import"./_stringToArray-CPTZWbz9.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
