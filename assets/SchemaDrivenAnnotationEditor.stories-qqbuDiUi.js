import{jJ as T}from"./iframe-C0EDAYOb.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DBYgfvq5.js";import"./index-r8ZA1smB.js";import"./useEntity-B6z886XJ.js";import"./pickBy-Cap1n3wD.js";import"./isString-55kpGADB.js";import"./_baseIteratee-CeH0Ppbj.js";import"./useQueries-D0oD4fCs.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-g2YGmReL.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Dc60Yvf4.js";import"./useSchema-CoJF2qyj.js";import"./index-DgimIWlM.js";import"./enums-BpoV2U7J.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-kVs1Rjlc.js";import"./uniq-D40s3xcZ.js";import"./forEach-B8iwwgef.js";import"./Grid-CX7-HW6Q.js";import"./ListItem-D8Y7y1kI.js";import"./listItemButtonClasses-t8YSyzU3.js";import"./ListItemIcon-ZHHmfPgD.js";import"./MenuItem-D9UPWW8O.js";import"./ListItemText-CDpQzK58.js";import"./ArrowUpward-uDdIQre0.js";import"./ContentCopy-B7dy9Zc7.js";import"./FormControlLabel-MbC-HD77.js";import"./Checkbox-CYLG-jSh.js";import"./SwitchBase-CdmxqW8G.js";import"./FormGroup-rqQYZvQE.js";import"./RadioGroup-Bl759n1r.js";import"./Radio-C9_TJdvm.js";import"./Slider-CwWA3DO0.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CI46FDJX.js";import"./DialogBase-DTRZNGue.js";import"./Close-CBdWnCyO.js";import"./HelpPopover-C5OHt5Yx.js";import"./MarkdownPopover-Bc_MwBRJ.js";import"./LightTooltip-DLf2qHuv.js";import"./MarkdownSynapse-CUgM0RYh.js";import"./SkeletonButton-DQkh7W-Z.js";import"./SkeletonInlineBlock-j6WQJRAi.js";import"./SkeletonTable-D7smPBDi.js";import"./SkeletonParagraph-MzkgbjcW.js";import"./JsonSchemaForm-BODyY-nW.js";import"./GridLegacy-DBcQPdW0.js";import"./HelpTwoTone-CABMl9ag.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-D5lNPpO5.js";import"./_createAggregator-CAAhSN02.js";import"./_baseMap-CEkFJX7B.js";import"./DateTimePicker-C5DTwWln.js";import"./useMobilePicker-DSUpQvzh.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-odj1KD57.js";import"./index-DT4yBOOW.js";import"./Chip-C_ROoNKv.js";import"./Tabs-CL-7E5yc.js";import"./KeyboardArrowRight-B4rMdsGN.js";import"./Autocomplete-C8RzXKL6.js";import"./usePreviousProps-Djia9o_O.js";import"./use-deep-compare-effect.esm-KpsN59b5.js";import"./TextWidget-B7HF78Mk.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};
