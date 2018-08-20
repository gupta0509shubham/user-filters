from ..models import UserDetails as user
from django.forms.models import model_to_dict

class FiltersService(object):

    def __init__(self):
        pass

    def query_user_details(self, filters):
        data = user.objects.all()
        if filters.get('uResume') is not None:
            resume = True if filters.get('uResume') == 'true' else False
            data = data.filter(resume=resume)
        if filters.get('uLocations') is not None:
            data = data.filter(current_location__in=filters.get('uLocations'))
        if filters.get('uExperience') is not None:
            data = data.filter(work_experience=filters.get('uExperience'))
        if filters.get('uSkills') is not None:
            data = data.filter(skills__contains=filters.get('uSkills'))
        if filters.get('uPLocations') is not None:
            data = data.filter(preferred_location=filters.get('uPLocations'))
        if filters.get('uCtc') is not None:
            data = data.filter(ctc=filters.get('uCtc'))
        x = []
        for d in data:
            x.append(model_to_dict(d))
        return x
