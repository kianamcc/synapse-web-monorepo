import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-BO8yZwbi.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DhZdVMKl.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Cj6PfvX0.js";import"./useAccessRequirements-8v8PXOIa.js";import"./index-DR8sCWIq.js";import"./_baseOrderBy-Dm5f2ySZ.js";import"./_baseIteratee-CTX8Podl.js";import"./_baseMap-2iTgJGE8.js";import"./_baseEach-0z5hbuaq.js";import"./useInfiniteQuery-CLrbgs3-.js";import"./groupBy-CAxq6XZ6.js";import"./_createAggregator-Du-c97WT.js";import"./DialogBase-C85pq0MZ.js";import"./Close-BzejB7Wi.js";import"./HelpPopover-fFTFNAOq.js";import"./MarkdownPopover-Dp1_UHGA.js";import"./LightTooltip-NUD2olvk.js";import"./MarkdownSynapse-BvDWhdGZ.js";import"./SkeletonButton-BjMHDMih.js";import"./SkeletonInlineBlock-DsdOdTux.js";import"./SkeletonTable-pZFOgUxM.js";import"./SkeletonParagraph-B75rYAhF.js";import"./EntityLink-CNg-JixB.js";import"./useEntity-B-68v_vW.js";import"./pickBy-B7UvI2sA.js";import"./isString-D9adbQ1Y.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-OxJ9im1Q.js";import"./useGetEntityHeaders-DiLxVnmn.js";import"./EntityIcon-ve5ALW0D.js";import"./ErrorChip-EZw68vzx.js";import"./Chip-CHXpsjrm.js";import"./UserOrTeamBadge-B2u09AIu.js";import"./UserBadge-DUaTP9cc.js";import"./useUserBundle-D6W7YJ3k.js";import"./MenuItem-CbpqHvkr.js";import"./Card-BK0RveQD.js";import"./TeamBadge-Ddyfgq3U.js";import"./UnmanagedACTAccessRequirementItem-CES9krPA.js";import"./RequirementItem-74DfSZdU.js";import"./LockTwoTone-9yHCrtuO.js";import"./ManagedACTAccessRequirementItemView-CLIPIF49.js";import"./SelfSignAccessRequirementItem-CJyhGhky.js";import"./DataAccessRequestAccessorsFilesForm-BTnrlSij.js";import"./enums-FlC8cLVC.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-jPjNCWnz.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BX8H94t-.js";import"./UserSearchBox-CDU6mGwp.js";import"./useDebouncedEffect-rkeBO--D.js";import"./Autocomplete-DA2l69mt.js";import"./usePreviousProps-D3abc4KG.js";import"./RadioGroup-DcIN2zkX.js";import"./Radio-gjuqJjNg.js";import"./SwitchBase-Cx_CtAYe.js";import"./FormGroup-CENXVxde.js";import"./FormControlLabel-DYL89ugT.js";import"./UploadDocumentField-DOVGIDKj.js";import"./FileUpload-BmjGGLUB.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CRKUqK6q.js";import"./GridLegacy-w9Vmv43v.js";import"./ResearchProjectForm-D0k_i-ro.js";import"./TextFieldWithWordLimit-CXFnMIyS.js";import"./AuthenticatedRequirement-Ylv3gdNU.js";import"./CertificationRequirement-Cvdlmns9.js";import"./TwoFactorAuthEnabledRequirement-Da-gyNJu.js";import"./ValidationRequirement-BdeopqPi.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BcKhr7P9.js";import"./RejectDataAccessRequestModal-B1DNyPzM.js";import"./CannedRejectionDialog-W3NmyIak.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-BhoxDMnX.js";import"./Checkbox-Du_6kpR0.js";import"./Grid-CNkvGOgJ.js";import"./upperFirst-CR50dZiE.js";import"./_stringToArray-CEmr_xLD.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const xe=["Demo","DemoError"];export{o as Demo,n as DemoError,xe as __namedExportsOrder,Le as default};
