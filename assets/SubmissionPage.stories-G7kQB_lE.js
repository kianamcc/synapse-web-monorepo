import{g as u,k as d,n as t,a3 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-I8dsMSSM.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DalnhjZc.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Z94wvpOy.js";import"./useAccessRequirements-BGfKgwXs.js";import"./index-Ds_sxz32.js";import"./_baseOrderBy-BUciiYyg.js";import"./_baseIteratee-BjtSyD36.js";import"./_baseMap-0mYeZW-r.js";import"./_baseEach-hv5x2_iZ.js";import"./useInfiniteQuery-ByZ3F9Pg.js";import"./groupBy-BS2NoTLt.js";import"./_createAggregator-D4e3Ipy8.js";import"./DialogBase-mHGOMstB.js";import"./Close-D1LcmWDM.js";import"./HelpPopover-BxQCnu74.js";import"./MarkdownPopover-Hp3QtlvD.js";import"./LightTooltip-DuvS2K_c.js";import"./MarkdownSynapse-CuDNblsf.js";import"./SkeletonButton-CmYn4uiY.js";import"./SkeletonInlineBlock-C0iISjKy.js";import"./SkeletonTable-DFj9MMPK.js";import"./SkeletonParagraph-CBxS9HL2.js";import"./EntityLink-Bezf5IFQ.js";import"./useEntity-DlG0Sr_U.js";import"./pickBy-CpgGSSQc.js";import"./isString-Bf4Ip_Hk.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-qqhRD9Bx.js";import"./useGetEntityHeaders-DqjZHbs-.js";import"./EntityIcon-B9gCpezi.js";import"./ErrorChip-nsM7c2YE.js";import"./Chip-6EemW15k.js";import"./UserOrTeamBadge-TMHZyU2T.js";import"./UserBadge-CqQgn6ht.js";import"./useUserBundle-BguAd_7C.js";import"./MenuItem-DD1mfKVc.js";import"./Card-BWxAw1G0.js";import"./TeamBadge-CsyW2Gn2.js";import"./UnmanagedACTAccessRequirementItem-DYh-Io52.js";import"./RequirementItem-DQR2n8G5.js";import"./LockTwoTone-CSabMtlI.js";import"./UserSearchBoxV2-BHOGXLzT.js";import"./useDebouncedEffect-vfTrqwBk.js";import"./use-deep-compare-effect.esm-DAOMflz-.js";import"./uniq-WWN9NeNB.js";import"./without-4WJZNm7D.js";import"./Select-aab027f3.esm-Eh80rwqJ.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DdL2KIdL.js";import"./SelfSignAccessRequirementItem-DGT9OHhB.js";import"./DataAccessRequestAccessorsFilesForm-BPUCNbaS.js";import"./enums-Bg2WRRxR.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-ChXleHo2.js";import"./RadioGroup-DWyjbB5-.js";import"./Radio-DM12mjxC.js";import"./SwitchBase-QianSKJh.js";import"./FormGroup-DbI2nnK4.js";import"./FormControlLabel-UUCY9bEv.js";import"./UploadDocumentField-BtwYjNe-.js";import"./FileUpload-BHRz6Zi0.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CpBcF0u3.js";import"./GridLegacy-Dqp4NCWT.js";import"./ResearchProjectForm-CsgBTVvN.js";import"./TextFieldWithWordLimit-CMjdBUhv.js";import"./AuthenticatedRequirement-xfKI0LFH.js";import"./CertificationRequirement-DeX6ax4c.js";import"./TwoFactorAuthEnabledRequirement-Dl8AbfyH.js";import"./ValidationRequirement-BehxMYlO.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-T1as3nrF.js";import"./RejectDataAccessRequestModal-Dyi7qkKy.js";import"./CannedRejectionDialog-U3h8BTla.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DLGB6ehz.js";import"./Checkbox-D9-_Jrd6.js";import"./Grid-9RoQQr0B.js";import"./upperFirst-D7u7Mh4G.js";import"./_stringToArray-Bh0Mx2ZU.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
