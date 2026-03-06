import{g as d,k as u,n as t,a3 as c,dN as R,b as e,ko as i,kp as E,H as s,kq as _,p as m,kr as I,ks as S,k7 as O}from"./iframe-CaNoDgkX.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Ci2fG1ah.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DQ9K1rPn.js";import"./useAccessRequirements-QnxeAXcY.js";import"./index-Ck3YdKMk.js";import"./_baseOrderBy-BoI5oJ1Q.js";import"./_baseIteratee-CeDu17wK.js";import"./_baseMap-DdX9zoAU.js";import"./_baseEach-B_eoSs0M.js";import"./useInfiniteQuery-BwBThpYw.js";import"./groupBy-B4LiwCMB.js";import"./_createAggregator-D1ssWfVs.js";import"./DialogBase-ymiBsjv4.js";import"./Close-Cj8W86JB.js";import"./HelpPopover-B-vfXunY.js";import"./MarkdownPopover-Ds9kb0yD.js";import"./LightTooltip-LycdI5lW.js";import"./MarkdownSynapse-BNV4Ce-k.js";import"./SkeletonButton-Cy68UPlr.js";import"./SkeletonInlineBlock-DFgc16ha.js";import"./SkeletonTable-BK7ah3SB.js";import"./SkeletonParagraph-C3PSWy-y.js";import"./EntityLink-CC1CTzMx.js";import"./useEntity-JB9BrXEu.js";import"./pickBy-BJzWTAWU.js";import"./isString-uXwuBLj9.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B68J36lQ.js";import"./useGetEntityHeaders-B7VwZuP2.js";import"./EntityIcon-1ADuQDTU.js";import"./ErrorChip-D-XeO5As.js";import"./Chip-QjhKE9v8.js";import"./UserOrTeamBadge-BuNDabgY.js";import"./UserBadge-GOVyrxjN.js";import"./useUserBundle-BaZ5uidp.js";import"./MenuItem-ClqCH5V3.js";import"./Card-u3GTibll.js";import"./TeamBadge-Dw3VzOPh.js";import"./UnmanagedACTAccessRequirementItem-DF2pkt89.js";import"./RequirementItem-jOSCcYYf.js";import"./LockTwoTone-C2XsbbEH.js";import"./UserSearchBoxV2-DKFdUaBM.js";import"./useDebouncedEffect-CldbPOq8.js";import"./use-deep-compare-effect.esm-zdPBa97A.js";import"./uniq-DRrPV-6o.js";import"./without-Kz8-v9mr.js";import"./Select-aab027f3.esm-tDXCdVfy.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-bYHk6y6K.js";import"./SelfSignAccessRequirementItem-C0ctpPnT.js";import"./DataAccessRequestAccessorsFilesForm-Cl7IEVL2.js";import"./enums-Bye2Mp1x.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BqOkrRCj.js";import"./RadioGroup-Big3OsyV.js";import"./Radio-BkN7YEgr.js";import"./SwitchBase-CkohN7El.js";import"./FormGroup-B7ZRSweE.js";import"./FormControlLabel-BEu4Df1B.js";import"./UploadDocumentField-Df7mBfte.js";import"./FileUpload-CVH3Levp.js";import"./ManagedACTAccessRequirementFormWikiWrapper-D5Sj2syI.js";import"./GridLegacy-DMs2Xv33.js";import"./ResearchProjectForm-BUc1rGz3.js";import"./TextFieldWithWordLimit-CPas1IC3.js";import"./AuthenticatedRequirement-BDCInJOW.js";import"./CertificationRequirement-BRqMbzse.js";import"./TwoFactorAuthEnabledRequirement-Do4oAn6R.js";import"./ValidationRequirement-DA0NAM8I.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-UJLL1vtD.js";import"./RejectDataAccessRequestModal-XvLLyiEG.js";import"./CannedRejectionDialog-D-l6VgSK.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CvYo2dLO.js";import"./Checkbox-CtLr8pt8.js";import"./Grid-De8Oaiq3.js";import"./upperFirst-Dd6bQi_v.js";import"./_stringToArray-0uPEisml.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ze=["Demo","DemoError"];export{o as Demo,n as DemoError,Ze as __namedExportsOrder,Ve as default};
