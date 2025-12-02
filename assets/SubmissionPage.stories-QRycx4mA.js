import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,ku as i,kv as C,H as s,kw as l,p as m,kx as b,ky as T,k9 as A}from"./iframe-D2BiYAJm.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-BZP9RNEK.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-C4josGxl.js";import"./useAccessRequirements-CqTXspdJ.js";import"./index-B3O79Ih6.js";import"./_baseOrderBy-NSrYaCdk.js";import"./_baseIteratee-DJIGxw8_.js";import"./_baseMap-wsin_ybF.js";import"./_baseEach-lVBn3sji.js";import"./useQueries--e6O_A4l.js";import"./useInfiniteQuery-Sh2g8CYk.js";import"./groupBy-CwdkPPHO.js";import"./_createAggregator-Cvl3PRJm.js";import"./DialogBase-C88NL5F2.js";import"./Close-CPRnS3EQ.js";import"./HelpPopover-By6qNja7.js";import"./MarkdownPopover-DszL4-wR.js";import"./LightTooltip-BghfsgXw.js";import"./MarkdownSynapse-CGCT0a2t.js";import"./SkeletonButton-B12Q1It5.js";import"./SkeletonInlineBlock-BQ13hP2k.js";import"./SkeletonTable-Deli_bNc.js";import"./SkeletonParagraph-BT8-dcZm.js";import"./EntityLink-BbRJdtHm.js";import"./useEntity-Do9HpzC8.js";import"./pickBy-D-9P8-F0.js";import"./isString-nCXr2nXn.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-iVaLoLsq.js";import"./useGetEntityHeaders-fhKOQ1W-.js";import"./EntityIcon-POzxmOV5.js";import"./ErrorChip-DOeXs4DE.js";import"./Chip-c69jX1Rh.js";import"./UserOrTeamBadge-mzUKPM24.js";import"./UserBadge-kZIqHyCo.js";import"./MenuItem-DHvtuYhK.js";import"./Card-Dy_ZNw9D.js";import"./TeamBadge-CunxNi0a.js";import"./UnmanagedACTAccessRequirementItem-DReQD9ir.js";import"./RequirementItem-Ccu4tcQx.js";import"./LockTwoTone-C6QWMmk3.js";import"./UserSearchBoxV2-Dmhq7ipR.js";import"./useDebouncedEffect-BXvugtXE.js";import"./use-deep-compare-effect.esm-B5fo4BFf.js";import"./uniq-DNDVbKGE.js";import"./without-CKeaJtJX.js";import"./Select-aab027f3.esm-DdxE8ntg.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-CTcJ9Jgy.js";import"./SelfSignAccessRequirementItem-Dz0aOIeG.js";import"./DataAccessRequestAccessorsFilesForm-Bnp-JQ2C.js";import"./enums-CA1H2HUz.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-CnP3kyMc.js";import"./RadioGroup-Cz_0UVl1.js";import"./Radio-CD9UTOQb.js";import"./SwitchBase-DTUTBpjJ.js";import"./FormGroup-D1NzuvEr.js";import"./FormControlLabel-qTCtrOZ6.js";import"./UploadDocumentField-Bxv6lSts.js";import"./FileUpload-CIYxCQc8.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BRFOJZ-2.js";import"./GridLegacy-Df0AvOqn.js";import"./ResearchProjectForm-Bo4vnXMY.js";import"./TextFieldWithWordLimit-eok4TV23.js";import"./AuthenticatedRequirement-ABUWWUyT.js";import"./CertificationRequirement-Dx1_PLEZ.js";import"./TwoFactorAuthEnabledRequirement-B8V9MA5b.js";import"./ValidationRequirement-BqmWlEDA.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-DNd0lZu9.js";import"./RejectDataAccessRequestModal-B5jCN7rC.js";import"./CannedRejectionDialog-GfanoTS5.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-BHYK11ln.js";import"./Checkbox-aIn5SsHz.js";import"./Grid-B4RGG4Wg.js";import"./upperFirst-BSMpmnOh.js";import"./_stringToArray-DllpH7JU.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
