import{g as d,k as u,n as t,a3 as c,dN as R,b as e,ko as i,kp as E,H as s,kq as _,p as m,kr as I,ks as S,k7 as O}from"./iframe-BMgfrXfb.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Dw48aisS.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-C6J4lFts.js";import"./useAccessRequirements-DjjUGyyf.js";import"./index-DVKuYuST.js";import"./_baseOrderBy-BXE4YCND.js";import"./_baseIteratee-5eLKOOqR.js";import"./_baseMap-CqqPaLqj.js";import"./_baseEach-j47pxew3.js";import"./useInfiniteQuery-Cbz01EgT.js";import"./groupBy-B0stDqDS.js";import"./_createAggregator-DuRlLWdN.js";import"./DialogBase-D4iV4KIR.js";import"./Close-DhPVL8HB.js";import"./HelpPopover-B6gX6EfQ.js";import"./MarkdownPopover-B7JHaicc.js";import"./LightTooltip-DXrinBip.js";import"./MarkdownSynapse-CazEVfAQ.js";import"./SkeletonButton-D7PyYMMO.js";import"./SkeletonInlineBlock-DrHJKgo1.js";import"./SkeletonTable-DhKHQ1GZ.js";import"./SkeletonParagraph-B8T8hjnS.js";import"./EntityLink-C3va4Abr.js";import"./useEntity-BFmhndJX.js";import"./pickBy-Bdckf9kO.js";import"./isString-BqaHYMQK.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Ckgtub0H.js";import"./useGetEntityHeaders-CmdBf-ot.js";import"./EntityIcon-CaggXdFC.js";import"./ErrorChip-C6lJNu9j.js";import"./Chip-Bg1Tm2ZJ.js";import"./UserOrTeamBadge-C4ygSLJL.js";import"./UserBadge-AJCe_aZw.js";import"./useUserBundle-DHT6W9rd.js";import"./MenuItem-Dxe8Sczu.js";import"./Card-D0xZuJv-.js";import"./TeamBadge-DRBhN9Lx.js";import"./UnmanagedACTAccessRequirementItem-nYVanCl-.js";import"./RequirementItem-C25fIRT4.js";import"./LockTwoTone-CoB3u60u.js";import"./UserSearchBoxV2-Cgxyglec.js";import"./useDebouncedEffect-DZ2gqiSz.js";import"./use-deep-compare-effect.esm-DGvQ55C3.js";import"./uniq-4WzyR3VV.js";import"./without-BSdGpAcc.js";import"./Select-aab027f3.esm-DITOJm8G.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-MLqsHckD.js";import"./SelfSignAccessRequirementItem-DsXcfEGO.js";import"./DataAccessRequestAccessorsFilesForm-5uOBPFVu.js";import"./enums-CaE4kMEd.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-D3ADPJZt.js";import"./RadioGroup-bUelhWY7.js";import"./Radio-CThtwb7S.js";import"./SwitchBase-C3j3eoH9.js";import"./FormGroup-DsMw5htC.js";import"./FormControlLabel-CMUY3YKI.js";import"./UploadDocumentField-BEPKEGfD.js";import"./FileUpload-B2UZ7L4E.js";import"./ManagedACTAccessRequirementFormWikiWrapper-2DvRBaFQ.js";import"./GridLegacy-Bg6riYLo.js";import"./ResearchProjectForm-CTbnZPv9.js";import"./TextFieldWithWordLimit-Dxw5b3dn.js";import"./AuthenticatedRequirement-tr_YDM5P.js";import"./CertificationRequirement-Ch8JcU-B.js";import"./TwoFactorAuthEnabledRequirement-B0-LbieE.js";import"./ValidationRequirement-JARPtdeu.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CnCgfIEY.js";import"./RejectDataAccessRequestModal-CiMDHfPn.js";import"./CannedRejectionDialog-C7lbAx6X.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-7Z8noB4Y.js";import"./Checkbox-C5g82_9m.js";import"./Grid-DXNyDVQM.js";import"./upperFirst-CN1ZSUXT.js";import"./_stringToArray-3zq99cdh.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
