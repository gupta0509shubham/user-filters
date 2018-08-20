from django.conf.urls import url
from .controllers import filter_ctrl

urlpatterns = [
    url(r'query_user_details/$', filter_ctrl.query_user_details, name="query_user_details")
]