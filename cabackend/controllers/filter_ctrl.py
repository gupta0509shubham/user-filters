from rest_framework.decorators import api_view, renderer_classes
from django.http import HttpResponse
from rest_framework.renderers import JSONRenderer
from cabackend.services.filter_service import FiltersService
from django.core.serializers.json import DjangoJSONEncoder
import json


@api_view(['GET'])
@renderer_classes((JSONRenderer,))
def query_user_details(request):
    try:
        filters = request.GET.get('filters')
        if filters is not None:
            filters = json.loads(str(filters))
            filter_object = FiltersService()
            result = filter_object.query_user_details(filters=filters)
        return HttpResponse(json.dumps(result, cls=DjangoJSONEncoder), content_type="application/json", status=200)
    except Exception as error:
        error_json = {
            "status": False
        }
        return HttpResponse(json.dumps(error_json, cls=DjangoJSONEncoder), content_type="application/json", status=500)
