import{g as d,k as u,n as t,a3 as c,d_ as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-DPeQX9IY.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CzBxbhh8.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-ChNJssQg.js";import"./useAccessRequirements-BUU86gwl.js";import"./index-BW92oQn_.js";import"./_baseOrderBy-CiWbJ4fO.js";import"./_baseIteratee-CFQTp0Io.js";import"./_baseMap-B4TD45PJ.js";import"./_baseEach-CmWAzlou.js";import"./useQueries-DguaIKVw.js";import"./useInfiniteQuery-xxALfQ-J.js";import"./groupBy-D0k_wmQ8.js";import"./_createAggregator-74EYR8BO.js";import"./DialogBase-5Fic6i17.js";import"./Close-DWJQu82H.js";import"./HelpPopover-Br--8Bfi.js";import"./MarkdownPopover-najxU_eq.js";import"./LightTooltip-Oi_KxvmH.js";import"./MarkdownSynapse-WzDgSYq4.js";import"./SkeletonButton-BCmBwLom.js";import"./SkeletonInlineBlock-CaY9GCqL.js";import"./SkeletonTable-BduDk56Z.js";import"./SkeletonParagraph-Qv67bFel.js";import"./EntityLink-DwMYYZAF.js";import"./useEntity-BqStd5q_.js";import"./pickBy-Cul4FH5m.js";import"./isString-eisIkryt.js";import"./useSuspenseQuery-CVo65e5I.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DJ1L7xQS.js";import"./useGetEntityHeaders-BtLy7wxA.js";import"./EntityIcon-DCwk1IiC.js";import"./ErrorChip-BOq3CKVT.js";import"./Chip-CLPwGdB7.js";import"./UserOrTeamBadge-BvVaYQG2.js";import"./UserBadge-Ds_oTg_h.js";import"./useUserBundle--Ku81fgt.js";import"./MenuItem-Bz0n2Htj.js";import"./Card-BzTjl1Pv.js";import"./TeamBadge-C-cS_y1J.js";import"./useRealmPrincipals-DPKusbFB.js";import"./UnmanagedACTAccessRequirementItem-Bd1JQewi.js";import"./RequirementItem-SBhw657t.js";import"./LockTwoTone-DXa2J871.js";import"./UserSearchBoxV2-CKQ7Q-6w.js";import"./useDebouncedEffect-C6YBGmU_.js";import"./use-deep-compare-effect.esm-BGGgLhTn.js";import"./uniq-B4CZLMQR.js";import"./without-B21189xg.js";import"./Select-aab027f3.esm-B6gyu4Fc.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-cPDIqhI5.js";import"./SelfSignAccessRequirementItem-BJvb7TsP.js";import"./DataAccessRequestAccessorsFilesForm-D090N2OI.js";import"./enums-BM4UcqWL.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Bn3tkj0r.js";import"./RadioGroup-g3t9JcOr.js";import"./Radio-CODELrSL.js";import"./SwitchBase-BdJN6sqS.js";import"./FormGroup-B08wWBs7.js";import"./FormControlLabel-BsfNF4hc.js";import"./UploadDocumentField-YgQdBXj3.js";import"./FileUpload-CnF4dhks.js";import"./ManagedACTAccessRequirementFormWikiWrapper-eyEjxeht.js";import"./GridLegacy-BOWLnKX-.js";import"./ResearchProjectForm-8nRTXXfc.js";import"./TextFieldWithWordLimit-CBQCBu0L.js";import"./AuthenticatedRequirement-B6-RpWP4.js";import"./CertificationRequirement-DFgH-JHC.js";import"./TwoFactorAuthEnabledRequirement-CqgOyNm4.js";import"./ValidationRequirement-noAGeTwV.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BLvb4SR6.js";import"./RejectDataAccessRequestModal-BfMyyARD.js";import"./CannedRejectionDialog-Dk-d3624.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CbSXaIL2.js";import"./Checkbox-Bep-teHK.js";import"./Grid-bJS6VZhs.js";import"./upperFirst-BGHTEpFh.js";import"./_stringToArray-BgrlHUCz.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
