import{g as d,k as u,n as t,a3 as c,d_ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-CkxBXYUS.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BMT3aLl1.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-0Ahi2tbY.js";import"./useAccessRequirements-CbWhvGoA.js";import"./index-SFhbXU88.js";import"./_baseOrderBy-EYj17sKo.js";import"./_baseIteratee-D3hgKa38.js";import"./_baseMap-BSeajlG7.js";import"./_baseEach-BOfPgxL4.js";import"./useQueries-Yp2j9f7r.js";import"./useInfiniteQuery-GEnPT25t.js";import"./groupBy-orPiS9Mg.js";import"./_createAggregator-G8fEk1pX.js";import"./DialogBase-A-L2CAQ2.js";import"./Close-CMCH1D24.js";import"./HelpPopover-8rjafscZ.js";import"./MarkdownPopover-3C7AALW8.js";import"./LightTooltip-iqHVnLEB.js";import"./MarkdownSynapse-Cl6WuhRF.js";import"./SkeletonButton-BkLf8D0r.js";import"./SkeletonInlineBlock-DEQxpJiN.js";import"./SkeletonTable-BxoX6BC7.js";import"./SkeletonParagraph-DYUWrGET.js";import"./EntityLink-DMcBExq9.js";import"./useEntity-D0Vta4xG.js";import"./pickBy-CksjIvz6.js";import"./isString-BRPRh22a.js";import"./useSuspenseQuery-CY63kBJ7.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-FPFa4g8_.js";import"./useGetEntityHeaders-Cmmt_wTI.js";import"./EntityIcon-CiFRTAj-.js";import"./ErrorChip-DuvRmLFR.js";import"./Chip-CZ1spSeI.js";import"./UserOrTeamBadge-BR8gNaFS.js";import"./UserBadge-CJBqeQOM.js";import"./useUserBundle-r9Y7ADD5.js";import"./MenuItem-CEfDuclk.js";import"./Card-h-vZuF9_.js";import"./TeamBadge-8mUTW7Hv.js";import"./useRealmPrincipals-BjOTp7Ah.js";import"./UnmanagedACTAccessRequirementItem-wDd2aJu2.js";import"./RequirementItem-DeiqHeSf.js";import"./LockTwoTone-BnyeyLJH.js";import"./UserSearchBoxV2-BMsAnB-J.js";import"./useDebouncedEffect-CnSqEB5d.js";import"./use-deep-compare-effect.esm-CITT_kVX.js";import"./uniq-xfdkBigH.js";import"./without-CIQb-7Wr.js";import"./Select-aab027f3.esm-CFvBkQoo.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-rsYKWbd_.js";import"./SelfSignAccessRequirementItem-B55bTcqa.js";import"./DataAccessRequestAccessorsFilesForm-BdQHscK5.js";import"./enums-l_3fZ-c3.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Bfb0431k.js";import"./RadioGroup-8OwxY3Wa.js";import"./Radio-CNEljpXE.js";import"./SwitchBase-fsEWQiIL.js";import"./FormGroup-Bk2Yq7SW.js";import"./FormControlLabel-DRB2gJy9.js";import"./UploadDocumentField-Di3OCioQ.js";import"./FileUpload-BLPrc18L.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DrhhgrIo.js";import"./GridLegacy-DWVl_W8h.js";import"./ResearchProjectForm-Cys374QD.js";import"./TextFieldWithWordLimit-BpAYHFof.js";import"./AuthenticatedRequirement-GDZwH9I-.js";import"./CertificationRequirement-2CHZU9Ev.js";import"./TwoFactorAuthEnabledRequirement-CN2JCcO9.js";import"./ValidationRequirement-C_Sv2Q1S.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CxX1FHRS.js";import"./RejectDataAccessRequestModal-CIjlxi7b.js";import"./CannedRejectionDialog-D_WjNRnw.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CtJfMeS4.js";import"./Checkbox-BdBxDy6O.js";import"./Grid-DspLooeH.js";import"./upperFirst-DULEUavg.js";import"./_stringToArray-Ce5OXXKj.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const er=["Demo","DemoError"];export{o as Demo,n as DemoError,er as __namedExportsOrder,Xe as default};
